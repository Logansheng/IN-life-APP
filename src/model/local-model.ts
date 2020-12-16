import clone from '@/lib/clone';

const localStorageKeyName = 'recordLIst';
const localModel = {
  data: [] as RecordItem[],
  create(record: RecordItem) {
    const record2 = clone(record);
    record2.time = new Date();
    this.data.push(record2);
  },
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName)
      || '[]') as RecordItem[];
    return;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};
export default localModel;