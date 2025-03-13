type TypeUser = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: {
    createAt: Date; // навести курсор на ключ createAt та буде підказку
    updateAt: Date; 
  }
  };

const page1: TypeUser = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: TypeUser = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}