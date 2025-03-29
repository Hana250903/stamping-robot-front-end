import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/login');
    }, 50); // Chờ 2 giây rồi chuyển hướng
    return () => clearTimeout(timer); // Dọn dẹp timer khi component unmount
  }, [router]);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Đang chuyển hướng đến trang đăng nhập...</p>
      <nav>
        <ul>
          <li><Link href="/login">Login</Link></li>
          <li><Link href="/product">Product</Link></li>
          <li><Link href="/robot">Robot</Link></li>
          <li><Link href="/stamp">Stamp</Link></li>
          <li><Link href="/user">User</Link></li>
        </ul>
      </nav>
    </div>
  );
}
