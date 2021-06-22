"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServerSideProps = void 0;
const link_1 = __importDefault(require("next/link"));
const Layout_1 = __importDefault(require("../../components/Layout"));
const List_1 = __importDefault(require("../../components/List"));
const axios_1 = __importDefault(require("axios"));
const WithStaticProps = ({ items }) => (<Layout_1.default title='Users List | Next.js + TypeScript Example'>
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List_1.default items={items}/>
    <p>
      <link_1.default href='/'>
        <a>Go home</a>
      </link_1.default>
    </p>
  </Layout_1.default>);
exports.getServerSideProps = async () => {
    // Example for including static props in a Next.js function component page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    const response = await axios_1.default.get('http://localhost:3000/api/users');
    const items = await response.data;
    return { props: { items } };
};
exports.default = WithStaticProps;
