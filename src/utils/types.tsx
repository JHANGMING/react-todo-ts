
export interface TodoData{
  id:string;
  status:boolean;
  content:string
}
 
export interface authData{
  nickname:string,
  token:string,
}

export interface todoData{
  data:TodoData[];
  filterData:TodoData[]
  tab:string,
}