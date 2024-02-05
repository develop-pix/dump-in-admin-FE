import React, { useEffect, useMemo, useState } from "react";
import { Box, FormControlLabel, Switch } from "@mui/material";
import { IEvent } from "../../interface/dto/Dto.interface";
import { selectEvent, useGetEventsMutation } from "../../features";
import { useAppSelector, useDebounce } from "../../hooks";
import EventManage from "../../components/event-manage/EventManage";
import SideBar from "../../components/reuse/sidebar/SideBar";
import { formatDate } from "../../utils";

export default function EventManagePage() {
  const [page, setPage] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [checkedSort, setCheckedSort] = useState(false);
  const [getEvent] = useGetEventsMutation();
  const events = useAppSelector(selectEvent);

  /** 기간 올림차순, 내림차순 핸들러 */
  const handleSortByDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedSort(event.target.checked);
  };

  /** 달라진 page 값이 Redux page 프로퍼티 값과 일치하는지 확인 */
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

  const mergedData = useMemo(
    () =>
      events.reduce((accumulator: IEvent[], currentValue) => {
        return accumulator.concat(currentValue.data);
      }, [] as IEvent[]),
    [events]
  );

  const debounceSearch = useDebounce((term) => {
    setSearch(term);
  }, 500);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget.value as string;
    debounceSearch(input);
  };

  /** Search 타이핑 후 바뀐 데이터 */
  const dataAfterSearch = useMemo(() => {
    return mergedData.filter((data) => {
      const query = new RegExp(search, "i");
      const testQuery = (words: string) => query.test(words);

      if (testQuery(data.mainThumbnailUrl)) {
        return true;
      } else if (testQuery(data.brandName)) {
        return true;
      } else if (testQuery(data.content)) {
        return true;
      } else if (testQuery(formatDate(data.startDate))) {
        return true;
      } else if (testQuery(formatDate(data.endDate))) {
        return true;
      } else if (testQuery(data.title)) {
        return true;
      } else if (testQuery(data.hashtags.join(", "))) {
        return true;
      }

      return false;
    });
  }, [mergedData, search]);

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

  // 체크 여부에 따라 기간 내림차순, 오름차순으로 정렬
  useEffect(() => {
    if (checkedSort) {
      dataAfterSearch.sort((a, b) => {
        const dateA = new Date(a.startDate).getTime();
        const dateB = new Date(b.startDate).getTime();
        return dateA - dateB;
      });
    } else {
      dataAfterSearch.sort((a, b) => {
        const dateA = new Date(a.startDate).getTime();
        const dateB = new Date(b.startDate).getTime();
        return dateB - dateA;
      });
    }
  }, [checkedSort, dataAfterSearch]);

  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel
          control={<Switch checked={checkedSort} onChange={handleSortByDate} />}
          label="오름차순, 내림차순"
        />

        <EventManage
          data={events}
          page={page}
          dataAfterSearch={dataAfterSearch}
          handlePageChange={handlePageChange}
          handleSearchInput={handleSearchInput}
        />
      </Box>
    </Box>
  );
}
