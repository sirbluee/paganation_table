import Pagination from "@/components/Pagination";
import Layout from "@/components/layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ products }) {
  // const [currentPage, setCurrentPage] = useState(1);
  // const pageSize = 100;
  // const handlePageChange = page =>{
  //   setCurrentPage(page);
  // }

  return (
    <>
      <Layout>
        <div className="container mt-5">
          <h1>Product Management</h1>
          <div className="product">
            
            <input style={{width:291,float:"right"}}
                  type="text"
                  class="form-control"
                  placeholder="Search Product"
                />
            <br />
            <table className="table">
              <thead>
                <tr className="">
                  <th scope="col">ID</th>
                  <th scope="col">PRODUCT NAME</th>
                  <th scope="col">PRICE</th>
                  <th scope="col">CATEGORY</th>
                  <th scope="col">IMAGES</th>
                  <th scope="col">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>${product.price}</td>
                    <td>{product.category.name}</td>
                    <td>
                      <img src={product.images[0]} width={120} alt="" />
                    </td>
                    <td className="mx-auto p-2">
                      <button type="button" className="btn btn-primary mx-3">
                        Edit
                      </button>
                      <button type="button" className="btn btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination/>
          </div>
        </div>
      </Layout>
    </>
  );
}
export async function getServerSideProps() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const product = await res.json();
  return {
    props: {
      products: product,
    },
  };
}
