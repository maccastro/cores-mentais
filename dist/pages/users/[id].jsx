var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { sampleUserData } from '../../utils/sample-data';
import Layout from '../../components/Layout';
import ListDetail from '../../components/ListDetail';
var StaticPropsDetail = function (_a) {
    var item = _a.item, errors = _a.errors;
    if (errors) {
        return (<Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>);
    }
    return (<Layout title={(item ? item.name : 'User Detail') + " | Next.js + TypeScript Example"}>
      {item && <ListDetail item={item}/>}
    </Layout>);
};
export default StaticPropsDetail;
export var getStaticPaths = function () { return __awaiter(void 0, void 0, void 0, function () {
    var paths;
    return __generator(this, function (_a) {
        paths = sampleUserData.map(function (user) { return ({
            params: { id: user.id.toString() },
        }); });
        // We'll pre-render only these paths at build time.
        // { fallback: false } means other routes should 404.
        return [2 /*return*/, { paths: paths, fallback: false }];
    });
}); };
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export var getStaticProps = function (_a) {
    var params = _a.params;
    return __awaiter(void 0, void 0, void 0, function () {
        var id_1, item;
        return __generator(this, function (_b) {
            try {
                id_1 = params === null || params === void 0 ? void 0 : params.id;
                item = sampleUserData.find(function (data) { return data.id === Number(id_1); });
                // By returning { props: item }, the StaticPropsDetail component
                // will receive `item` as a prop at build time
                return [2 /*return*/, { props: { item: item } }];
            }
            catch (err) {
                return [2 /*return*/, { props: { errors: err.message } }];
            }
            return [2 /*return*/];
        });
    });
};
