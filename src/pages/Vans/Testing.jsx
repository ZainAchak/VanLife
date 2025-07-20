import { useSearchParams } from "react-router-dom";

export default function Testing() {
    const vans = [
    { id: 1, name: "Van 1" },
    { id: 2, name: "Van 2" },
    { id: 3, name: "Van 3" },
    { id: 4, name: "Van 4" },
    { id: 5, name: "Van 5" },
    { id: 6, name: "Van 6" },
    { id: 7, name: "Van 7" },
    { id: 8, name: "Van 8" },
  ];
  const [searchParams, setSearchParams] = useSearchParams();

  // Read the current page from URL (default to 1 if not present)
  const currentPage = parseInt(searchParams.get("page") || "1");
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = vans.slice(indexOfFirstItem, indexOfLastItem);

  function goToPage(pageNumber) {
    setSearchParams({ page: pageNumber.toString() });
  }

  return (
    <div>
      {/* Show items */}
      <ul>
        {currentItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      {/* Pagination controls */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === Math.ceil(vans.length / itemsPerPage)}
      >
        Next
      </button>
    </div>
  );
}
