export async function middleware(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  if (pathname.startsWith('/rikishi/21')) {
    console.log('do something here')
  }
}

export const config = {
  matcher: [
    '/rikishi/21', '/rikishi/22', '/rikishi/23', '/rikishi/24', '/rikishi/25'
  ],
};
