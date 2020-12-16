type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  time?: Date;
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