export interface TodoData {
  id: string;
  status: boolean;
  content: string;
}

export interface authData {
  nickname: string;
  token: string;
}

export interface initialData {
  data: TodoData[];
  filterData: TodoData[];
  tab: string;
  id: string;
  content: string;
}
