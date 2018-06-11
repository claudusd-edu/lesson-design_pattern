// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

import langHttp from "prismjs/components/prism-php";

//require("prismjs/themes/prism-okaidia.css");
require("prismjs/themes/prism-tomorrow.css");
require("../assets/code.css");


import { theme } from "spectacle-theme-solarized-dark";

// Require CSS
require("normalize.css");

/**
const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});
**/
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Design Patterns
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Creational
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
            Singleton
          </Heading>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="php"
          bgColor="primary"
          code={require("raw-loader!../example/creational/singleton.php")}
          ranges={[
            { loc: [2,3], title: "Class" },
            { loc: [6,7], title: "Private constructor"},
            { loc: [11, 16], title: "Static Method"},
            { loc: [4, 5], title: "Static property"},
            { loc: [17, 18], title: "Return"},
            { loc: [21,23] },
            { loc: [24,25] }
          ]}/>
        <Slide transition={["fade"]}
           bgColor="primary">
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
            Simple Factory
          </Heading>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="php"
          bgColor="primary"
          code={require("raw-loader!../example/creational/simple-factory.php")}
          ranges={[
            { loc: [2,3], title: "Class" },
          ]}/>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
            Factory Method
          </Heading>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="php"
          bgColor="primary"
          code={require("raw-loader!../example/creational/factory-method.php")}
          ranges={[
            { loc: [2,3], title: "Class" },
          ]}/>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
            Abstract Factory
          </Heading>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="php"
          bgColor="primary"
          code={require("raw-loader!../example/creational/abstract-factory.php")}
          ranges={[
            { loc: [2,3], title: "Class" },
          ]}/>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
            Builder
          </Heading>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="php"
          bgColor="primary"
          code={require("raw-loader!../example/creational/builder.php")}
          ranges={[
            { loc: [2,3], title: "Class" },
          ]}/>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
            Prototype
          </Heading>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="php"
          bgColor="primary"
          code={require("raw-loader!../example/creational/prototype.php")}
          ranges={[
            { loc: [2,3], title: "Class" },
          ]}/>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="secondary">
              Behavioral
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="secondary">
              Chain of Responsability
            </Heading>
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="php"
            bgColor="primary"
            code={require("raw-loader!../example/behavioral/chain-of-responsability.php")}
            ranges={[
              { loc: [2,6], title: "Init" },
              { loc: [8,11], title: "Wallet Pay" },
              { loc: [11,14], title: "Payapl Pay" },
              { loc: [14,17], title: "Credit Pay" },
              { loc: [0,1], title: "???" },
              { loc: [20,21], title: "Abstract class" },
              { loc: [22,28], title: 'Order' },
              { loc: [45,46], title: 'Condition' },
              { loc: [31,32], title: 'Logic' },
              { loc: [33,36], title: 'Logic' },
              { loc: [29,30], title: 'Logic' },
              { loc: [36,39], title: 'Logic' },
              { loc: [39,42], title: 'Logic' },
              { loc: [48,49], title: 'Wallet' },
              { loc: [50,55], title: 'Wallet' },
              { loc: [62,66], title: 'Wallet' },
              { loc: [57,61], title: 'Wallet' },
              { loc: [68,69], title: 'Paypal' },
              { loc: [70,75], title: 'Paypal' },
              { loc: [82,86], title: 'Paypal' },
              { loc: [77,81], title: 'Paypal' },
              { loc: [88,89], title: 'Credit' },
              { loc: [90,95], title: 'Credit' },
              { loc: [102,106], title: 'Credit' },
              { loc: [97,101], title: 'Credit' },
              { loc: [108,111], title: 'Use it' },
              { loc: [112,114], title: 'Use it' },
              { loc: [115,116], title: 'Use it' },
            ]}/>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="secondary">
              Command
            </Heading>
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="php"
            bgColor="primary"
            code={require("raw-loader!../example/behavioral/command.php")}
            ranges={[
              { loc: [2,6], title: "Command Interface" },
              { loc: [38,39], title: "Receiver" },
              { loc: [40,44], title: "Actions" },
              { loc: [45,49], title: "Actions" },
              { loc: [7,8], title: "Invoker" },
              { loc: [9,13], title: "Invoker" },
              { loc: [51,52], title: "Command 1" },
              { loc: [53,54], title: "Command 1" },
              { loc: [55,56], title: "Command 1" },
              { loc: [57,62], title: "Command 1" },
              { loc: [63,68], title: "Command 1" },
              { loc: [69,70], title: "Command 2" },
              { loc: [71,72], title: "Command 2" },
              { loc: [73,74], title: "Command 2" },
              { loc: [75,80], title: "Command 2" },
              { loc: [81,86], title: "Command 2" },
              { loc: [89,90], title: "Use it" },
              { loc: [93,95], title: "Use it" },
              { loc: [98,101], title: "Use it" },
              { loc: [15,16], title: "Invoker 2" },
              { loc: [17,18], title: "Invoker 2" },
              { loc: [19,23], title: "Invoker 2" },
              { loc: [24,28], title: "Invoker 2" },
              { loc: [29,35], title: "Invoker 2" },
              { loc: [104,108], title: "Use It" },
            ]}/>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="secondary">
              Iterator
            </Heading>
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="php"
            bgColor="primary"
            code={require("raw-loader!../example/behavioral/iterator.php")}
            ranges={[
              { loc: [2,3], title: "Init" },
              { loc: [3,6], title: "Add" },
              { loc: [6,7], title: "Remove" },
              { loc: [8,9], title: "count" },
              { loc: [10,13], title: "foreach" },
            ]}/>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="secondary">
              Mediator
            </Heading>
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="php"
            bgColor="primary"
            code={require("raw-loader!../example/behavioral/mediator.php")}
            ranges={[
              { loc: [2,3], title: "Collegue" },
              { loc: [12,13], title: "Customer" },
              { loc: [25,26], title: "Waiter" },
              { loc: [35,36], title: "Chef" },
              { loc: [43,44], title: "Mediator" },
              { loc: [45,50], title: "Mediator" },
              { loc: [4,10], title: "Collegue" },
              { loc: [52,53], title: "Mediator" },
              { loc: [60,65], title: "Mediator" },
              { loc: [65,68], title: "Mediator" },
              { loc: [69,72], title: "Mediator" },
              { loc: [92,99], title: "Use it" },
              { loc: [14,18], title: "Customer" },
              { loc: [74,78], title: "Mediator" },
              { loc: [27,30], title: "Waiter" },
              { loc: [79,83], title: "Mediator" },
              { loc: [37,41], title: "Chef" },
              { loc: [79,83], title: "Mediator" },
              { loc: [27,31], title: "Waiter" },
              { loc: [84,88], title: "Mediator" },
              { loc: [19,23], title: "Customer" },
            ]}/>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="secondary">
              Memento
            </Heading>
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="php"
            bgColor="primary"
            code={require("raw-loader!../example/behavioral/memento.php")}
            ranges={[
              { loc: [20,21], title: "VCS" },
              { loc: [24,28], title: "Add content" },
              { loc: [29,33], title: "Current Content" },
              { loc: [34,38], title: "Commit" },
              { loc: [2,3], title: "Commit Object" },
              { loc: [8,13], title: "Constructor" },
              { loc: [4,7], title: "Attributes" },
              { loc: [14,18], title: "Getter" },
              { loc: [34,38], title: "Commit" },
              { loc: [39,43], title: "Checkout" },
              { loc: [45,46], title: "Run it" },
              { loc: [47,48], title: "Run it" },
              { loc: [48,49], title: "Run it" },
              { loc: [49,50], title: "Run it" },
              { loc: [50,51], title: "Run it" },
              { loc: [51,52], title: "Run it" },
              { loc: [52,53], title: "Run it" },
            ]}/>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="secondary">
              Observer
            </Heading>
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="php"
            bgColor="primary"
            code={require("raw-loader!../example/behavioral/observer.php")}
            ranges={[
              { loc: [2,3], title: "Tweet" },
              { loc: [6,10], title: "Constructor" },
              { loc: [11,15], title: "Getter" },
              { loc: [41,42], title: "Twitter" },
              { loc: [45,46], title: "Post tweet" },
              { loc: [25,26], title: "Folower" },
              { loc: [33,34], title: "Email" },
              { loc: [17,18], title: "RSS" },
              { loc: [17,23], title: "RSS" },
              { loc: [33,39], title: "Email" },
              { loc: [25,31], title: "Follower" },
              { loc: [41,44], title: "Observalbe" },
              { loc: [45,51], title: "Observalbe" },
              { loc: [17,23], title: "RSS" },
              { loc: [33,39], title: "Email" },
              { loc: [25,31], title: "Follower" },
              { loc: [55,56], title: "Runt it" },
              { loc: [57,60], title: "Runt it" },
              { loc: [61,62], title: "Runt it" },
            ]}/>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={3} fit caps lineHeight={1} textColor="secondary">
              Visitor
            </Heading>
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="php"
            bgColor="primary"
            code={require("raw-loader!../example/behavioral/visitor.php")}
            ranges={[
              { loc: [2,3], title: "Employee" },
              { loc: [14,15], title: "Chef" },
              { loc: [22,23], title: "Waiter" },
              { loc: [7,8], title: "Serializer" },
              { loc: [9,10], title: "Serializer" },
              { loc: [11,12], title: "Serializer" },
              { loc: [4,5], title: "Employee" },
              { loc: [30,31], title: "XML" },
              { loc: [32,36], title: "XML" },
              { loc: [37,41], title: "XML" },
              { loc: [43,44], title: "JSON" },
              { loc: [45,49], title: "JSON" },
              { loc: [50,54], title: "JSON" },
              { loc: [50,54], title: "JSON" },
              { loc: [16,20], title: "Chef" },
              { loc: [24,28], title: "Waiter" },
              { loc: [56,58], title: "Run it" },
              { loc: [56,58], title: "Run it" },
              { loc: [59,61], title: "Run it" },
              { loc: [62,63], title: "Run it" },
              { loc: [63,64], title: "Run it" },
              { loc: [64,65], title: "Run it" },
              { loc: [65,66], title: "Run it" },
            ]}/>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={3} fit caps lineHeight={1} textColor="secondary">
              Strategy
            </Heading>
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="php"
            bgColor="primary"
            code={require("raw-loader!../example/behavioral/strategy.php")}
            ranges={[
              { loc: [2,3], title: "Context" },
              { loc: [22,26], title: "Strategy" },
              { loc: [27,34], title: "Concrete Strategy" },
              { loc: [35,41], title: "Concrete Strategy" },
              { loc: [4,10], title: "Default Strategy" },
              { loc: [11,15], title: "Change Strategy" },
              { loc: [16,20], title: "Execute Strategy" },
              { loc: [43,44], title: "Run it" },
              { loc: [43,44], title: "Run it" },
              { loc: [45,47], title: "Run it" },
              { loc: [48,50], title: "Run it" },
            ]}/>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={3} fit caps lineHeight={1} textColor="secondary">
              State
            </Heading>
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="php"
            bgColor="primary"
            code={require("raw-loader!../example/behavioral/state.php")}
            ranges={[
              { loc: [2,3], title: "State Context" },
              { loc: [22,26], title: "State" },
              { loc: [6,10], title: "Default State" },
              { loc: [11,15], title: "Change state" },
              { loc: [16,20], title: "Handle" },
              { loc: [27,34], title: "Close State" },
              { loc: [35,36], title: "Warm-up State" },
              { loc: [37,43], title: "Warm-up State" },
              { loc: [44,51], title: "Warm-up State" },
              { loc: [53,54], title: "Ready State" },
              { loc: [55,62], title: "Ready State" },
              { loc: [62,69], title: "Ready State" },
              { loc: [72,73], title: "Run it" },
              { loc: [73,74], title: "Run it" },
              { loc: [74,76], title: "Run it" },
              { loc: [76,78], title: "Run it" },
            ]}/>
          <Slide transition={["fade"]} bgColor="primary">
            <Heading size={3} fit caps lineHeight={1} textColor="secondary">
              Template Method
            </Heading>
          </Slide>
          <CodeSlide
            transition={["fade"]}
            lang="php"
            bgColor="primary"
            code={require("raw-loader!../example/behavioral/template-method.php")}
            ranges={[
              { loc: [2,3], title: "Abstract class" },
              { loc: [4,11], title: "Template method" },
              { loc: [12,20], title: "Abstract method" },
              { loc: [12,20], title: "Abstract method" },
              { loc: [21,22], title: "Concrete class" },
              { loc: [23,27] },
              { loc: [28,34] },
              { loc: [35,39] },
              { loc: [40,44] },
              { loc: [46,48], title:"Run it" },
            ]}/>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Structural
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
            Adapter
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Bridge
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Composite
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Decorator
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Facade
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Flyweight
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Proxy
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
