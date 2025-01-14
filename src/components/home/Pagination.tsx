import { FC } from "react";
import { Pagination as Pagi } from "antd";
import { useAppDispatch, useAppSelector } from "@/states";
import { filterUsers, selectFilterPagination } from "@/states/slices/filter";

interface PaginationProps {}

const Pagination: FC<PaginationProps> = () => {
  const dispatch = useAppDispatch();
  const pagination = useAppSelector(selectFilterPagination);
  console.log(pagination);
  
  return (
    <Pagi
      size="small"
      defaultCurrent={1}
      total={pagination.totalPages * pagination.pageSize}
      pageSize={pagination.pageSize}
      showSizeChanger={false}
      onChange={(currentPage) => dispatch(filterUsers({ currentPage }))}
    />
  );
};

export default Pagination;
