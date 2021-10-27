import React from "react";

import Header from "./components/Header";
import Article from "./components/Article";

import { Row, Col, Card } from "react-bootstrap";

export default function App() {
  const { pathname } = window.location;

  const [articleID, setArticleID] = React.useState(null);

  React.useEffect(() => {
    // отловит всё после /post/
    const URLsegment = pathname.match(/(?<=\/post\/).*$/g);
    /* если такого совпадения нет или нет текста после /post/
    то произойдёт редирект к корню
    */
    if (URLsegment !== null && URLsegment[0] !== "") {
      setArticleID(URLsegment);
    } else if (pathname !== "/") {
      window.location.pathname = "/";
    }
  }, [pathname]);

  return (
    <div className="App">
      <Header />
      {
        // выводим или дефолтную вёрстку с карточкой, или статью с ID
        articleID ? (
          <Article id={articleID} />
        ) : (
          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150x150"
                />
                <Card.Body>
                  <Card.Title>
                    <a href="/post/1">Card title</a>
                  </Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )
      }
    </div>
  );
}
