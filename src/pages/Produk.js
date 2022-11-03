import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import Container from 'react-bootstrap/esm/Container';
import "../assets/css/Produk.css"
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Baru from '../components/Baru'

function Produk() {
  return (
    <div>
    <Header />
        <Container className="d-flex mb-5 mt-5">
            <div className='leftbar d-flex flex-column'>
                <Link to="#">Forum</Link>
                <Link to="#">Tags</Link>
                <Link to="#">Leaderboard</Link>
                <Link to="#">Blogs</Link>
            </div>
            <main className='mx-5'>
                <div className="d-flex">
                    <h3 className='d-flex flex-fill'>Forum</h3>
                    <Link to="">
                        <Button variant="success" style={{width: "12vw"}}>Buat Pertanyaan</Button>
                    </Link>
                </div>
                <h5 className='my-3'>Tempat berkomunikasi para programmer dengan cara mengajukan atau menjawab sebuah pertanyaan</h5>
                <div className='d-flex gap-2'>
                    <Form.Control type="text" placeholder="Ketik untuk mencari pertanyaan" />
                    <Link to="">
                        <Button variant="success" style={{width: "10vw"}}>Telusuri</Button>
                    </Link>
                </div>

                <div className='link-forum d-flex gap-3 mt-5'>
                    <Link to="/baru">Baru</Link>
                    <Link to="/baru">Aktif</Link>
                    <Link to="/baru">Belum Dijawab</Link>
                </div>
                <Baru />
                <Baru />
                <Baru />
                <Baru />
                <Baru />
                <Baru />
                <Baru />
            </main>
            <div className='col-3 rightbar p-5' style={{height: '33vw'}}>
                <div>
                    <b>Selamat Datang</b>
                    <p>Ikuti facebook , telegram dan instagram kami untuk update terbaru.</p>
                    <p>Setelah membuat pertanyaan, kamu bisa copy-paste link pertanyaan kamu ke grup Telegram atau FB untuk mengasih tahu para member di grup tersebut</p>
                    <p>Ada yang tidak dimengerti? FAQ.</p>
                </div>
                <div>
                    <b>User Aktif</b>
                    <DropdownButton id="dropdown-item-button" title="Harian">
                        <Dropdown.Item as="button">Harian</Dropdown.Item>
                        <Dropdown.Item as="button">Mingguan action</Dropdown.Item>
                        <Dropdown.Item as="button">Bulanan</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
        </Container>
      <Footer />
    </div>
  )
}

export default Produk