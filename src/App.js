import React, {Component} from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
{
  'id': '1',
  'image': 'https//placeimg.com/64/64/any',
  'name': '홍길동',
  'birthday': 20020218,
  'gender': 'male',
},
{
  'id': '2',
  'image': 'https//placeimg.com/64/64/any',
  'name': '김철수',
  'birthday': 20030916,
  'gender': 'male',
}
] //배열로 저장되는 고객정보

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => { //map함수로 여러 고객정보를 불러올 수 있음
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
