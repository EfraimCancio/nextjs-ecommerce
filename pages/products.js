import Layout from "@/components/Layout";
import Link from "next/link";

export default function Products() {
  return (
    <Layout>
      <Link
        className="bg-blue-900 text-white px-2 py-1 rounded-md"
        href={"/products/new"}
      >
        Adicione um novo produto
      </Link>
    </Layout>
  );
}
