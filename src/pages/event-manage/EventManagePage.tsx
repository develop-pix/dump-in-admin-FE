import React, { useEffect, useMemo, useState } from "react";
import { selectEvent, useGetEventMutation } from "../../features";
import { useAppSelector } from "../../hooks";
import EventManage from "../../components/event-manage/EventManage";
import SideBar from "../../components/reuse/sidebar/SideBar";
import { Box } from "@mui/material";
import { IEvent } from "../../interface/dto/Dto.interface";

export default function EventManagePage() {
  const [page, setPage] = useState<number>(0);
  const [getEvent] = useGetEventMutation();
  const events = useAppSelector(selectEvent);

  /** 달라진 page 값이 Redux 안 page 값과 일치하는지 확인 */
  const hasReduxVal = useMemo(
    () => events.findIndex((x) => x.page === page),
    [events, page]
  );

  const handlePageChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    event?.preventDefault();
    setPage(newPage);
  };

  // 만약 달라진 page 값이 Redux 안에 없을시 API를 Call함
  useEffect(() => {
    let ignore = false;
    if (!ignore && hasReduxVal === -1)
      getEvent({
        page: page + 1,
        perPage: 10,
      });

    return () => {
      ignore = true;
    };
  }, [getEvent, hasReduxVal, page]);

  /** EventState의 data 프로퍼티끼리만 합친 데이터 */
  const mergedData = useMemo(
    () =>
      events.reduce((accumulator: IEvent[], currentValue) => {
        return accumulator.concat(currentValue.data);
      }, [] as IEvent[]),
    [events]
  );

  console.log(mergedData);

  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <EventManage
        data={events}
        page={page}
        mergedData={mergedData}
        handlePageChange={handlePageChange}
      />
    </Box>
  );
}
