export async function middleware(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  if (pathname.startsWith('/test/21')) {
    console.log('do something here')
  }
}

export const config = {
  matcher: [
    '/test/21', '/test/22', '/test/23', '/test/24', '/test/25'
  ],
};
