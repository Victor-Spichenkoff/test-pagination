import { useState } from 'react';
import ReactPaginate from 'react-paginate';

interface PropsPageNavigation {
    setCurrentPage: any
    totalPages: number
}

export default function PageNavigation ({ pageCount, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(0)

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
    onPageChange(selectedPage.selected + 1); // Adapte conforme necessário
  };

  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      onPageChange={handlePageChange}
      containerClassName="pagination"
      activeClassName="active"
      previousLabel="Previous"
      nextLabel="Next"
      breakLabel="..."
      breakClassName="break-me"
    />
  );
};

