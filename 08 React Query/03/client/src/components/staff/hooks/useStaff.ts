import { useCallback, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import type { Staff } from "@shared/types";
import { filterByTreatment } from "../utils";
import { axiosInstance } from "@/axiosInstance";
import { queryKeys } from "@/react-query/constants";

async function getStaff(): Promise<Staff[]> {
  const { data } = await axiosInstance.get("/staff");
  return data;
}

export function useStaff() {
  // for filtering staff by treatment
  const [filter, setFilter] = useState<string>("all");

  const selectFn = useCallback(
    (unfilteredStaff: Staff[]) => {
      if (filter === "all") return unfilteredStaff;

      return filterByTreatment(unfilteredStaff, filter);
    },
    [filter]
  );

  const fallback: Staff[] = [];

  const { data: staff = fallback } = useQuery({
    queryKey: [queryKeys.staff],
    queryFn: getStaff,
    select: selectFn,
  });

  return { staff, filter, setFilter };
}
