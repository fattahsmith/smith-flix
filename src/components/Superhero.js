import { Card, Container, Row, Col, Image } from "react-bootstrap"
import dragonkeepImage from "../assets/images/superhero/dragonkeep.jpeg"
import paramontImage from "../assets/images/superhero/paramont.jpeg"
import thekingdomImage from "../assets/images/superhero/the kingdom.jpeg"
import vinaImage from "../assets/images/superhero/vina.jpeg"
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg"
import supermanImage from "../assets/images/superhero/superman.jpg"

const SuperHero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">SUPERHERO MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="movieImage">
              <Image src={dragonkeepImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">DRAGON KEEP</Card.Title>
                  <Card.Text className="text-left">
                    Film bertema animasi dan petualangan ini mengisahkan era kuno Tiongkok yang semakin berada dalam bahaya semenjak lenyapnya para naga dan bangkitnya kekaisaran jahat.
                    Seorang gadis muda bernama Ping kini harus mencari telur naga terakhir yang masih hidup dan menjalankan takdir yang ia bawa di pundaknya. Ping kini dapat menggapai impian hidupnya, menjadi Penjaga Naga.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 5 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={paramontImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">PARAMONT</Card.Title>
                  <Card.Text className="text-left">
                    Berikutnya ada film komedi fantasi yang ditulis dan disutradarai oleh John Krasinski. Film ini juga turut dibintangi oleh Ryan Reynolds dan Cailey Fleming.
                    Film ini mengisahkan seorang gadis yang sedang mengalami masa sulit kemudian mulai melihat teman-teman imajinasinya saat kecil yang seiring tumbuh besar telah ia tinggalkan.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={thekingdomImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">THE KINGDOM</Card.Title>
                  <Card.Text className="text-left">
                    Film ini menyajikan kisah lanjutan setelah kematian Caesar, pemimpin bangsa kera, di film War for the Planet of the Apes tahun 2017 lalu. Para kera kini hidup tanpa kepemimpinan. Ada klan kera yang menyaksikan kawanannya diperbudak untuk mencuri teknologi manusia.
                    Sementara terdapat seorang perempuan muda yang mungkin menjadi kunci atas segala permasalahan, walaupun ia juga memiliki rencananya sendiri.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={vinaImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">VINA 7 HARI</Card.Title>
                  <Card.Text className="text-left">
                    Nenek Vina mencurigai adanya kejanggalan dari kematian Vina sebab tubuhnya remuk secara tak wajar. Sang nenek ingin membuat laporan tetapi tidak memiliki cukup bukti. Arwah Vina kemudian merasuki tubuh sahabatnya dan ia berusaha mengungkapkan kebenaran yang dikubur sebelum tujuh hari.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={spidermanImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SPIDERMAN</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={supermanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SUPERMAN HERO</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SuperHero
