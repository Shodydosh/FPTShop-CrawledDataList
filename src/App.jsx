import './App.css';
import './index.css';
import './dist/output.css';
import ProductMain from './components/ProductMain/ProductMain';
import { Breadcrumb, Layout, Menu } from 'antd';
import ProductData from './json/laptopsData.json';
import laptopsData from './json/laptopsData.json';
import tabletsData from './json/tabletsData.json';
import mobilesData from './json/mobilesData.json';
import react, { useState } from 'react';
import 'animate.css';

const { Header, Content, Footer } = Layout;
const productLayout = ['Laptop', 'Phone', 'Tablet'];
const laptopBrands = ['All', 'Acer', 'Lenovo', 'Asus', 'MSI', 'Macbook', 'HP', 'Dell'];
const phoneBrands = ['All', 'Nokia', 'Lenovo'];
const tabletBrands = ['All', 'Acer', 'tungdeptrai'];

function App() {
    const [selectedKey, setSelectedKey] = useState('0');
    const [brands, setBrands] = useState(laptopBrands);
    const [initList, setInitList] = useState(ProductData);
    const [productList, setProductList] = useState(ProductData);

    const filterList = (word) => {
        if (word === 'All') setProductList(initList);
        else {
            const filteredData = initList.filter((item) =>
                item.name.toLowerCase().includes(word.toLowerCase()),
            );
            setProductList(filteredData);
        }
    };

    function handleMenuSelect({ key }) {
        filterList(brands[key]);
        setSelectedKey(key);
    }

    function handleLayoutSelect({ key }) {
        if (key === '0') {
            setBrands(laptopBrands);
            setProductList(laptopsData);
            setInitList(laptopsData);
        }
        if (key === '1') {
            setBrands(phoneBrands);
            setProductList(mobilesData);
            setInitList(mobilesData);
        }
        if (key === '2') {
            setBrands(tabletBrands);
            setProductList(tabletsData);
            setInitList(tabletsData);
        }
        setSelectedKey('0');
    }

    return (
        <div className="App ">
            <Layout className="layout">
                <Header className="bg-gray-950">
                    <Menu
                        className="bg-gray-950"
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['0']}
                        onSelect={handleLayoutSelect}
                        items={productLayout.map((_, index) => {
                            const key = index;
                            return {
                                key,
                                label: `${productLayout[index]}`,
                            };
                        })}
                    />
                </Header>
                <Header className="bg-gray-950">
                    <Menu
                        className="bg-gray-950"
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['0']}
                        onSelect={handleMenuSelect}
                        selectedKeys={[selectedKey]}
                        items={brands.map((_, index) => {
                            const key = index;
                            return {
                                key,
                                label: `${brands[index]}`,
                            };
                        })}
                    />
                </Header>
                <Content className="bg-gray-900 min-h-screen" style={{ padding: '0 50px' }}>
                    <ProductMain productList={productList}></ProductMain>
                </Content>
                <Footer className="bg-gray-950 text-gray-50" style={{ textAlign: 'center' }}>
                    @2023 LONGKA CLONE
                </Footer>
            </Layout>
        </div>
    );
}

export default App;
