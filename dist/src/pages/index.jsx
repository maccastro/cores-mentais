"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const Layout_1 = __importDefault(require("../components/Layout"));
const IndexPage = () => (<Layout_1.default title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <link_1.default href="/about">
        <a>About</a>
      </link_1.default>
    </p>
  </Layout_1.default>);
exports.default = IndexPage;
