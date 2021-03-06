"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaticProps = exports.getStaticPaths = void 0;
const sample_data_1 = require("../../utils/sample-data");
const Layout_1 = __importDefault(require("../../components/Layout"));
const ListDetail_1 = __importDefault(require("../../components/ListDetail"));
const StaticPropsDetail = ({ item, errors }) => {
    if (errors) {
        return (<Layout_1.default title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout_1.default>);
    }
    return (<Layout_1.default title={`${item ? item.name : 'User Detail'} | Next.js + TypeScript Example`}>
      {item && <ListDetail_1.default item={item}/>}
    </Layout_1.default>);
};
exports.default = StaticPropsDetail;
exports.getStaticPaths = async () => {
    // Get the paths we want to pre-render based on users
    const paths = sample_data_1.sampleUserData.map((user) => ({
        params: { id: user.id.toString() },
    }));
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
};
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
exports.getStaticProps = async ({ params }) => {
    try {
        const id = params?.id;
        const item = sample_data_1.sampleUserData.find((data) => data.id === Number(id));
        // By returning { props: item }, the StaticPropsDetail component
        // will receive `item` as a prop at build time
        return { props: { item } };
    }
    catch (err) {
        return { props: { errors: err.message } };
    }
};
