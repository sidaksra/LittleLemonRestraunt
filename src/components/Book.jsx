import React, { useState } from 'react';
import SubHeader from './SubHeader.jsx';
import { Box, Text, Input, Button, VStack } from '@chakra-ui/react';

const Book = () => {
  const [reservationInfo, setReservationInfo] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    date: '',
    time: '',
    numberOfGuests: '',
  });
  const [reservationSuccess, setReservationSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationInfo({
      ...reservationInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any necessary actions here (e.g., API call or database entry).
    // For this example, we'll just set the success message.
    setReservationSuccess(true);
  };

  return (
    <>
      <SubHeader />
      <section className="book-a-table">
        <div className="row">
          <div className="book-left">
            <img src={require("../images/restaurant.jpg")} alt="Restaurant Interior" />
            <h2>Reserve a Table at Little Lemon Restaurant</h2>

            <p>Experience the perfect dining atmosphere at Little Lemon Restaurant. We offer an array of exquisite dishes that cater to every palate. To ensure that your visit is a seamless and memorable experience, we recommend making a reservation in advance.</p>
            <br />
            <p>To reserve a table, please use the form or contact us directly. We look forward to serving you and providing you with an exceptional dining experience.</p>

          </div>
          <div className="book-right">
          <h3>Reserve Here</h3>
            <Box
                mt={4}
                p={4}
                borderRadius="lg"
                boxShadow="md"
                bg="white"
                maxWidth="auto"
                margin="0 auto"
                marginBottom="2em"
                padding="20px"
                border="1px solid #e0e0e0"
                transition="box-shadow 0.3s"
                _hover={{
                    boxShadow: 'lg',
                }}
                >
                    
                <form onSubmit={handleSubmit}>
                    <Text fontSize="2em" fontWeight="bold" mb={4}>
                    Enter Your Details
                    </Text>
                    <VStack spacing={4}>
                    <Input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        onChange={handleInputChange}
                        required
                        borderRadius="md"
                        border="1px solid #ccc"
                        padding="10px"
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleInputChange}
                        required
                        borderRadius="md"
                        border="1px solid #ccc"
                        padding="10px"
                    />
                    <Input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        onChange={handleInputChange}
                        required
                        borderRadius="md"
                        border="1px solid #ccc"
                        padding="10px"
                    />
                    <Input
                        type="date"
                        name="date"
                        placeholder="Date"
                        onChange={handleInputChange}
                        required
                        borderRadius="md"
                        border="1px solid #ccc"
                        padding="10px"
                    />
                    <Input
                        type="time"
                        name="time"
                        placeholder="Time"
                        onChange={handleInputChange}
                        required
                        borderRadius="md"
                        border="1px solid #ccc"
                        padding="10px"
                    />
                    <Input
                        type="number"
                        name="numberOfGuests"
                        placeholder="Number of Guests"
                        onChange={handleInputChange}
                        required
                        borderRadius="md"
                        border="1px solid #ccc"
                        padding="10px"
                    />
                    <Button
                        colorScheme="teal"
                        size="lg"
                        w="100%"
                        type="submit"
                        borderRadius="md"
                        padding="10px"
                    >
                        Reserve Table
                    </Button>
                    </VStack>
                </form>
                {reservationSuccess && (
                    <Text color="teal" mt={4} fontWeight="bold" textAlign="center">
                    Your reservation has been booked. We look forward to serving you!
                    </Text>
                )}
            </Box>
            <h3>Contact Information</h3>
            <div>
              <span>Phone: +1 (123) 456-7890</span>
            </div>
            <div>
              <span>Email: <a href="mailto:info@littlelemonrestaurant.com">info@littlelemonrestaurant.com</a></span>
            </div>
            <h3>Opening Hours</h3>
            <div>
              <span>Monday - Friday: 11:00 AM - 10:00 PM</span>
            </div>
            <div>
              <span>Saturday - Sunday: 10:00 AM - 11:00 PM</span>
            </div>
            <h3>Location</h3>
            <div>
              <span>123 Main St, Your City, USA</span>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Book;