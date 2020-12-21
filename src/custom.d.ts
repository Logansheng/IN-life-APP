type RecordItem = {
  tags: Tag[];
  notes: string;
  type: string;
  amount: number;
  time?: string;
}
type RootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
}
type Tag = {
  id: string;
  name: string;
}
type  TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated';
  remove: (id: string) => boolean;
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
  save: () => void;
}

interface Window {

}