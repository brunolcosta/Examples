import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

const PUBLIC_PATHS = ["/login", "/api/auth", "/_next", "/favicon.ico"];

export async function middleware(request: NextRequest) {
  // Permite acesso livre às rotas públicas
  if (PUBLIC_PATHS.some((path) => request.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Tenta obter o token JWT da sessão
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  // Se não estiver autenticado, redireciona para /login
  if (!token) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Usuário autenticado, segue normalmente
  return NextResponse.next();
}