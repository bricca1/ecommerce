import Image from "next/image";
import Link from "next/link";

interface NotFoundProps {
    filteredProducts: any[];
  }
  
  const NotFound: React.FC<NotFoundProps> = ({ filteredProducts }) => {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center px-4">
        {
          filteredProducts.length === 0 && <>
            <div className="relative w-full max-w-md mt-6">
              <Image
                src="/NotFound.jpg"
                alt="Not Found"
                width={500}
                height={500}
                className="mx-auto animate-bounce"
              />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 md:text-6xl">No se encontraron Productos</h1>
            <p className="text-lg text-gray-600 mt-2 md:text-xl">
              No hay productos que coincidan con tu búsqueda.
            </p>
            <p className="text-lg text-gray-600 mt-2 md:text-xl">
              Intenta ajustar tus filtros o verifica que el nombre que estás buscando sea correcto.
            </p>
            <p className="text-sm text-gray-500">
              Si el error persiste, puedes comunicarte con:
            </p>
            <Link className="py-3" href="https://www.linkedin.com/in/nicolas-bricca/" >
                <p className=" text-gray-900">{` Nicolas Bricca`}</p>
            </Link>
          </>
        }
      </div>
    );
  };
  
  export default NotFound;