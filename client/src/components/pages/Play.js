// import React from "react";
// import API from "../../utils/API";


// export class Play extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { myObject: {} };
//     }

//     componentDidMount() {
//         //your API request here
//         API.searchBook()
//             .then(response => response.json().then(result => {
//                 this.setState({ myObject: result });
//             }))
//             .catch((err) => { throw err; });
//     }

//     render() {
//         return (
//             <Container>
//                 <Header />
//                 <Content>
//                     <Card>
//                         <CardItem>
//                             <Left>
//                                 <Thumbnail source={{ uri: 'https://openclipart.org/image/2400px/svg_to_png/177482/ProfilePlaceholderSuit.png' }} />
//                                 <Body>
//                                     <Text>Email:</Text>
//                                     <Text>{this.state.myObject.Email}</Text>
//                                     <Text>Name:</Text>
//                                     <Text>{this.state.myObject.Name}</Text>
//                                     <Text>Surname:</Text>
//                                     <Text>{this.state.myObject.Surname}</Text>
//                                     <Text>ID Number:</Text>
//                                     <Text>{this.state.myObject.IdNumber}</Text>
//                                 </Body>
//                             </Left>
//                         </CardItem>
//                     </Card>
//                 </Content>
//             </Container>
//         );
//     }

// }