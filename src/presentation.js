import React from 'react';
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

// Images
import clientServerModel from './assets/client-server-model.png';

require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022', // Black
    tertiary: '#03A9FC', // Blue
    quarternary: '#CECECE', // Gray
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transitionDuration={500} theme={theme}>
        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1} fit textColor="secondary">
            {`Client ↔️ Server`}
          </Heading>
          <Text textColor="tertiary" size={1}>
            Petr Čaněk
          </Text>
        </Slide>

        {/* Terminology */}
        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            {`Client ↔️ Server`}
          </Heading>
          <Image src={clientServerModel} />
          <List>
            <Appear>
              <ListItem size={30}>Server - any remote computer</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                Client - any web, desktop, mobile application
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Communication is wia Internet</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={1} textColor="tertiary">
            How do I get the data?
          </Heading>
        </Slide>

        {/* Pooling */}
        <Slide transition={['fade']}>
          <Heading size={1} textColor="tertiary">
            Pooling
          </Heading>
          <List>
            <Appear>
              <ListItem size={30}>Client asks, Server respondes</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Connection is short-lived</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={1} textColor="tertiary">
            I need to get some files...
          </Heading>
        </Slide>

        {/* Direct file access */}
        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            Direct file access
          </Heading>
          <List>
            <Appear>
              <ListItem size={30}>Only HTTP server needed</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Apache / Nginx</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>No modifications / additions</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Can provide basic authentication</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={1} textColor="tertiary">
            What about adding files?
          </Heading>
        </Slide>

        {/* FTP */}
        <Slide transition={['fade']}>
          <Heading size={1} textColor="tertiary">
            FTP
          </Heading>
          <List>
            <Appear>
              <ListItem size={30}>File Transfer Protocol</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>FTP server needed</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Login needed</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Works with files / folders only</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Read / Write / Delete</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={1} textColor="tertiary">
            Well, I would like to search and filter the data...
          </Heading>
        </Slide>

        {/* API */}
        <Slide transition={['fade']}>
          <Heading size={1} textColor="tertiary">
            API
          </Heading>
          <Appear>
            <Text size={4}>Application Programming Interface</Text>
          </Appear>
        </Slide>

        {/* API - description */}
        <Slide transition={['fade']}>
          <Heading size={3} textColor="tertiary">
            API
          </Heading>
          <List>
            <Appear>
              <ListItem size={30}>Custom written application</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Provides data and/or functionality</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Can be of any complexity and shape</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={1} textColor="tertiary">
            I would like some structure for my API...
          </Heading>
        </Slide>

        {/* REST */}
        <Slide transition={['fade']}>
          <Heading size={1} textColor="tertiary">
            REST
          </Heading>
          <Appear>
            <Text size={4}>Representational State Transfer</Text>
          </Appear>
        </Slide>

        {/* REST - description */}
        <Slide transition={['fade']}>
          <Heading size={1} textColor="tertiary">
            REST
          </Heading>
          <List>
            <Appear>
              <ListItem size={30}>Oriented around resources</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>One resource == one URL</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Leverages standard HTTP methods</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>GET, POST, PUT, PATCH, DELETE</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Is "weak" standard</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Every impelementation is different</ListItem>
            </Appear>
          </List>
        </Slide>

        {/* GraphQL */}
        <Slide transition={['fade']}>
          <Heading size={1} textColor="tertiary">
            GraphQL
          </Heading>
          <Appear>
            <Text size={4}>REST done "right"</Text>
          </Appear>
        </Slide>

        {/* GraphQL */}
        <Slide transition={['fade']}>
          <Heading size={1} textColor="tertiary">
            GraphQL
          </Heading>
          <List>
            <Appear>
              <ListItem size={30}>Strongly typed</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Only one URL for all actions</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Server describes data & actions </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Client asks only for data he wants</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                Response shape is 1:1 with request shape
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={1} textColor="tertiary">
            I want real-live communication!
          </Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={1} textColor="tertiary">
            Ask for data every second.
          </Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={1} textColor="tertiary">
            No.
          </Heading>
          <Appear>
            <Text size={1}>Ok, sometimes it can be usefull...</Text>
          </Appear>
          <Appear>
            <Text size={1}>Ask your mentor / senior :)</Text>
          </Appear>
        </Slide>

        {/* Pushing */}
        <Slide transition={['fade']}>
          <Heading size={1} textColor="tertiary">
            Pushing
          </Heading>
          <List>
            <Appear>
              <ListItem size={30}>
                Client registeres on server for data
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                Server is responsible for pushing the data to client
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Connection is long lived</ListItem>
            </Appear>
          </List>
        </Slide>

        {/* GraphQL subscription */}
        <Slide transition={['fade']}>
          <Heading size={1} textColor="tertiary">
            GraphQL - subscription
          </Heading>
          <List>
            <Appear>
              <ListItem size={30}>Part of the GraphQL specification</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                Builds on top of existing GraphQL API
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                Client subscribes to data-mutations done on server
              </ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>
                Server sends updated data every time they are changed
              </ListItem>
            </Appear>
          </List>
        </Slide>

        {/* WebSocket */}
        <Slide transition={['fade']}>
          <Heading size={1} textColor="tertiary">
            WebSocket
          </Heading>
          <List>
            <Appear>
              <ListItem size={30}>Backward compatible with HTTP</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Client opens connection to server</ListItem>
            </Appear>
            <Appear>
              <ListItem size={30}>Messages can then be sent both ways</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={1} textColor="tertiary">
            Q&A
          </Heading>
          <Heading size={3}>Thanks for attention!</Heading>
          <Text>https://github.com/CorwinCZ</Text>
        </Slide>
      </Deck>
    );
  }
}
