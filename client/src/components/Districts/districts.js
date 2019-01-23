import "./districts.css"

//const Districts = props => <div className="districts">{props.children}</div>

import React, { Component } from "react";
import { Col, Row, Container } from "../Grid";
import API from "../../utils/API";

class Districts extends Component {
  state = {
    senators: []
  };

  getSenators = () => {
    API.getSenators()
      .then(res =>
        this.setState({
          books: res.members
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No Senators Found, Try a Different Query"
        })
      );
  };

  render() {
    console.log("senators:");
    console.log(this.state.senators);
    return (
      <Container>
        {/* <Row>
            <Card title="Results">
              {this.state.senators.length ? (
                <List>
                  {this.state.senators.map(senators => (
                    <Senator
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer /> */}
      </Container>
    );
  }
}


export default Districts;