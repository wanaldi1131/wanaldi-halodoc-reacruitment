import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListPost from './page/listPost';
import PostDetail from './page/postDetail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ListPost} exact/>
        <Route path="/postdetail" component={PostDetail} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
