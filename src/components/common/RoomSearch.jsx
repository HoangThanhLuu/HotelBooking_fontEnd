import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import moment from "moment";
import { getAvailableRooms } from "../utils/ApiFunctions";
import RoomSearchResults from "./RoomSearchResult";
import RoomTypeSelector from "./RoomTypeSelector";

const RoomSearch = () => {
  const [searchQuery, setSearchQuery] = useState({
    checkInDate: "",
    checkOutDate: "",
    roomType: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [availableRooms, setAvailableRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e) => {};

  const handleInputChange = (e) => {};
  const handleClearSearch = () => {};

  return (
    <>
      <Container className="shadow mt-n5 mb-5 py-5">
        <Form onSubmit={handleSearch}>
          <Row className="justify-content-center">
            <Col xs={12} md={3}>
              <Form.Group controlId="checkInDate">
                <Form.Label>Check-in Date</Form.Label>
                <Form.Control
                  type="date"
                  name="checkInDate"
                  value={searchQuery.checkInDate}
                  onChange={handleInputChange}
                  min={moment().format("YYYY-MM-DD")}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group controlId="checkOutDate">
                <Form.Label>Check-out Date</Form.Label>
                <Form.Control
                  type="date"
                  name="checkOutDate"
                  value={searchQuery.checkOutDate}
                  onChange={handleInputChange}
                  min={moment().format("YYYY-MM-DD")}
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={3}>
              <Form.Group controlId="roomType">
                <Form.Label>Room Type</Form.Label>
                <div className="d-flex">
                  <RoomTypeSelector
                    handleRoomInputChange={handleInputChange}
                    newRoom={searchQuery}
                  />
                  <Button variant="secondary" type="submit" className="ml-2">
                    Search
                  </Button>
                </div>
              </Form.Group>
            </Col>
          </Row>
        </Form>

        {isLoading ? (
          <p className="mt-4">Finding availble rooms....</p>
        ) : availableRooms ? (
          <RoomSearchResults
            results={availableRooms}
            onClearSearch={handleClearSearch}
          />
        ) : (
          <p className="mt-4">
            No rooms available for the selected dates and room type.
          </p>
        )}
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
      </Container>
    </>
  );
};

export default RoomSearch;
