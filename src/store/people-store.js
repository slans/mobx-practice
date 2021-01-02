import { observable } from 'mobx';

const peopleStore = observable([{ name: 'Sasha' }, { name: 'Sergei' }]);

export default peopleStore;
