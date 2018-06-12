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
            { loc: [2,3], title: "Interface" },
            { loc: [7,8], title: "Class" },
            { loc: [13,18], title: "Class constructor" },
            { loc: [19,23], title: "class getter" },
            { loc: [24,28], title: "class getter" },
            { loc: [30,31], title: "class Simple Factory" },
            { loc: [32,37], title: "class Simple Factory" },
            { loc: [38,39], title: "Run it" },
            { loc: [40,42], title: "Run it" },
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
            { loc: [2,3], title: "Interface" },
            { loc: [4,5], title: "Interface" },
            { loc: [7,8], title: "Implment 1" },
            { loc: [9,13], title: "Implment 1" },
            { loc: [15,16], title: "Implment 2" },
            { loc: [17,21], title: "Implment 2" },
            { loc: [23,24], title: "Factory Method" },
            { loc: [23,24], title: "Factory Method" },
            { loc: [25,26], title: "Factory Method" },
            { loc: [27,32], title: "Factory Method" },
            { loc: [34,35], title: "Concrete Factory 1" },
            { loc: [36,40], title: "Concrete Factory 1" },
            { loc: [43,44], title: "Concrete Factory 2" },
            { loc: [45,49], title: "Concrete Factory 2" },
            { loc: [51,53], title: "Run it" },
            { loc: [54,56], title: "Run it" },
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
            { loc: [2,3], title: "Interface 1" },
            { loc: [7,11], title: "Implement Product 1" },
            { loc: [12,16], title: "Implement Product 2" },
            { loc: [17,18], title: "Interface 2" },
            { loc: [22,26], title: "Implement Employee 1" },
            { loc: [27,31], title: "Implement Employee 2" },
            { loc: [33,39], title: "Abstract Factory" },
            { loc: [41,42], title: "Concrete Factory 1" },
            { loc: [43,47], title: "Concrete Factory 1" },
            { loc: [48,52], title: "Concrete Factory 1" },
            { loc: [54,55], title: "Concrete Factory 2" },
            { loc: [56,60], title: "Concrete Factory 2" },
            { loc: [61,65], title: "Concrete Factory 2" },
            { loc: [67,70], title: "Run it" },
            { loc: [72,75], title: "Run it" },
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
            { loc: [2,3], title: "Product" },
            { loc: [4,11], title: "Product" },
            { loc: [12,18], title: "Product" },
            { loc: [17,23], title: "Product" },
            { loc: [25,26], title: "Builder" },
            { loc: [27,31], title: "Builder" },
            { loc: [32,37], title: "Builder" },
            { loc: [38,43], title: "Builder" },
            { loc: [44,48], title: "Builder" },
            { loc: [50,55], title: "Builder" },
            { loc: [56,64], title: "Builder" },
            { loc: [67,68], title: "Run it" },
            { loc: [68,69], title: "Run it" },
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
            { loc: [2,6], title: "Prototype" },
            { loc: [7, 8], title: "Concreate Prototype" },
            { loc: [11, 15], title: "constructor" },
            { loc: [16, 20], title: "Getter" },
            { loc: [21, 25], title: "Setter" },
            { loc: [26, 30], title: "Implemented method" },
            { loc: [32, 33], title: "Run it" },
            { loc: [33, 34], title: "Run it" },
            { loc: [34, 35], title: "Run it" },
            { loc: [35, 36], title: "Run it" },
            { loc: [36, 37], title: "Run it" },
            { loc: [37, 38], title: "Run it" },
            { loc: [38, 39], title: "Run it" },
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
        <CodeSlide
          transition={["fade"]}
          lang="php"
          bgColor="primary"
          code={require("raw-loader!../example/structural/adapter.php")}
          ranges={[
            { loc: [2,6], title: "Target" },
            { loc: [7,8], title: "Concreate Target" },
            { loc: [9,14], title: "Concreate Target" },
            { loc: [16,17], title: "Client" },
            { loc: [18,22], title: "Client" },
            { loc: [18,22], title: "Client" },
            { loc: [24,25], title: "Run it" },
            { loc: [26,27], title: "Run it" },
            { loc: [28,29], title: "Run it" },
            { loc: [30,31] },
            { loc: [32,36] },
            { loc: [41,43], title: "Run it" },
            { loc: [56,57], title: "Adapter" },
            { loc: [58,64], title: "Adapter" },
            { loc: [65,70], title: "Adapter" },
            { loc: [75,77], title: "Run it" },
          ]}/>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Bridge
          </Heading>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="php"
          bgColor="primary"
          code={require("raw-loader!../example/structural/bridge.php")}
          ranges={[
            { loc: [2,6], title: "WebPage" },
            { loc: [7,14], title: "About Page" },
            { loc: [15,22], title: "About Dark" },
            { loc: [23,30], title: "About Light" },
            { loc: [31,38], title: "Index Page" },
            { loc: [39,46], title: "Index Dark" },
            { loc: [47,54], title: "Index Light" },
            { loc: [57,58]},
            { loc: [76,80], title: "Theme"},
            { loc: [81,88], title: "Dark Theme"},
            { loc: [89,96], title: "Light Theme"},
            { loc: [98,99], title: "Web page with theme"},
            { loc: [100,107], title: "Web page with theme"},
            { loc: [108,114], title: "Web page with theme"},
            { loc: [116,123], title: "Web page with theme"},
          ]}/>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Composite
          </Heading>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="php"
          bgColor="primary"
          code={require("raw-loader!../example/structural/composite.php")}
          ranges={[
            { loc: [2,6], title: "Employee" },
            { loc: [7,14], title: "Chef" },
            { loc: [15, 22], title: "Waiter" },
            { loc: [15, 22], title: "Waiter" },
            { loc: [23, 24], title: "Composite" },
            { loc: [25, 31], title: "Composite" },
            { loc: [32, 40], title: "Composite" },
            { loc: [32, 40], title: "Run it" },
            { loc: [42, 46], title: "Run it" },
            { loc: [47, 48], title: "Run it" },
          ]}/>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Decorator
          </Heading>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="php"
          bgColor="primary"
          code={require("raw-loader!../example/structural/decorator.php")}
          ranges={[
            { loc: [2,8] },
            { loc: [9,10] },
            { loc: [11,20] },
            { loc: [22,23], title: "Decorator" },
            { loc: [24,30], title: "Decorator" },
            { loc: [31,35], title: "Decorate Method" },
            { loc: [36,40], title: "Decorate Method" },
            { loc: [42,43], title: "Decorator" },
            { loc: [44,50], title: "Decorator" },
            { loc: [51,55], title: "Decorate Method" },
            { loc: [56,60], title: "Decorate Method" },
            { loc: [63,66], title: "Run it" },
            { loc: [67,70], title: "Run it" },
            { loc: [71,74], title: "Run it" },
          ]}/>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Facade
          </Heading>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="php"
          bgColor="primary"
          code={require("raw-loader!../example/structural/facade.php")}
          ranges={[
            { loc: [2,3] },
            { loc: [4,8] },
            { loc: [9,13] },
            { loc: [14,18] },
            { loc: [19,23] },
            { loc: [24,28] },
            { loc: [29,33] },
            { loc: [34,38] },
            { loc: [43,46] },
            { loc: [69,70], title: "Facade" },
            { loc: [77,82], title: "Facade" },
            { loc: [82,87], title: "Facade" },
            { loc: [71,76], title: "Facade" },
            { loc: [88,91], title: "Facade" },
            { loc: [91,92], title: "Facade" },
            { loc: [92,93], title: "Facade" },
            { loc: [93,94], title: "Facade" },
            { loc: [94,96], title: "Facade" },
            { loc: [96,99], title: "Facade" },
            { loc: [102,104], title: "Run it" },
          ]}/>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Flyweight
          </Heading>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="php"
          bgColor="primary"
          code={require("raw-loader!../example/structural/flyweight.php")}
          ranges={[
            { loc: [2,3] },
            { loc: [10,15] },
            { loc: [4,9] },
            { loc: [4,9] },
            { loc: [16,20] },
            { loc: [21,25] },
            { loc: [48,49] },
            { loc: [54,59] },
            { loc: [50,53] },
            { loc: [60,64] },
            { loc: [66,73] },
            { loc: [28,29], title: "Flyweight" },
            { loc: [30,36], title: "Flyweight" },
            { loc: [37,45], title: "Flyweight" },
            { loc: [37,45], title: "Singleton ?" },
            { loc: [75,79], title: "Run it" },
            { loc: [80,84], title: "Run it" },
          ]}/>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Proxy
          </Heading>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="php"
          bgColor="primary"
          code={require("raw-loader!../example/structural/proxy.php")}
          ranges={[
            { loc: [2,10] },
            { loc: [11,12] },
            { loc: [19,25] },
            { loc: [13,18] },
            { loc: [26,30] },
            { loc: [31,35] },
            { loc: [36,40] },
            { loc: [42,43], title: "Proxy" },
            { loc: [48,52], title: "Proxy" },
            { loc: [44,45], title: "Proxy" },
            { loc: [46,47], title: "Proxy" },
            { loc: [53,57], title: "Proxy" },
            { loc: [58,65], title: "Proxy" },
            { loc: [66,71], title: "Proxy" },
            { loc: [72,77], title: "Proxy" },
          ]}/>
      </Deck>
    );
  }
}
