// import React, { useState } from 'react';
// import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, Button } from '@chakra-ui/core';

// const CookiePolicy: React.FC = () => {
//   const [accepted, setAccepted] = useState(false);
//   const [isOpen, setIsOpen] = useState(true);

//   const handleAccept = () => {
//     document.cookie = 'cookie-policy=accepted; expires=Thu, 01 Jan 2030 12:00:00 UTC; path=/;';
//     setAccepted(true);
//     setIsOpen(false);
//   };

//   return (
//     <Modal isOpen={isOpen}>
//       <ModalOverlay />
//       <ModalContent>
//         <ModalHeader>Cookie Policy</ModalHeader>
//         <ModalBody>
//           <p>This website uses cookies to ensure you get the best experience on our website.</p>
//         </ModalBody>
//         <ModalFooter>
//           <Button onClick={handleAccept}>Accept</Button>
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default CookiePolicy;
