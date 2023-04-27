There are different languages used to build Smart Contracts, so here we will go through the most popular ones:

## Solidity

According to Solidity documentation, "Solidity is an object-oriented, high-level language for implementing Smart Contracts."(...)"Solidity is a curly-bracket language designed to target the Ethereum Virtual Machine (EVM). It is influenced by C++, Python and JavaScript"

Solidity is mainly used to build Smart Contracts on Ethereum and EVM compatible chains such as Quorum, Polygon, Cromos, Binance Smart Chain and more.

Solidity is built with C++ and it's commonly compared with Javascript. Solidity is also relevant because it is one of the first Smart Contract development languages that give Solidity a  historical value.

Solidity was created as a response to a need: Ethereum's own EVM. This language has many advantages, such as Solidity's learning curve is smoother than other languages, it's relatively easy to understand and write, it has different and a lot of tools available and Solidity already has well defined standards for some specific apps.

But nothing built by humans is perfect, in Solidity for example, the devs must write tests that exceed 95% coverage to ensure the robustness of the program. And it is necessary to always update solidity to the latest version, since the differences between previous versions are significant, so it is difficult to reuse code written in a version that is not the most updated, there are a few more disadvantages, but we certainly believe that the advantages outweigh the negative points. We recommend that if you choose this language to code, please, keep in mind to use the latest version.

## Code example in Solidity^[[m]](#cmnt13)^

We provide an example contract that shows a stripped-down version of the token-contract that wraps ETH into WETH. The WETH contract on the Ethereum mainnet has been written in solidity and can be found under this address: 0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2. You may see the full contract by navigating to this address on etherscan.io and then click on code. To focus on the key language features we have here considered a reduced version of that contract. Let's go through it briefly.

<FOTO ELIO CÓDIGO>

In solidity the main object is a contract, which is defined using the contract reserved keyword. Inside the body of the contract one may define state variables, functions, modifiers, events and recently also errors. In this simple example we focus on state variables, functions and events.

Other contracts may only call functions, which could return information about the state variables of the contract if needed.^[[n]](#cmnt14)^ The most important state variable comes next, namely balanceOf, which is used to store the balances of WETH for any given address. This particular variable is of type "mapping" from an address type to a uint type, which means that each address points to or maps to a uint. This is also accessible by the public. You may try it out by yourself on etherscan. Another important thing to notice is that solidity uses semicolons at the end of statements.

Typically the declaration of state variables and events happens at the beginning of a contract, although there is nothing in the compiler that enforces this. After these declarations come a set of functions, which we discuss next.

The deposit function has a typical syntax. It starts with the function key word, followed by the name, then followed by parentheses that contain arguments (in this case none) and then there are two key words. The first one specifies the function visibility and the second one the function mutability. This function is public, which means that it can be called both from outside the contract as well as from within the contract.

Other options include external, internal and private. The mutability of this function is payable, which means that it may receive ETH. Other options are view and pure. A view function does not write into the storage. A pure function neither writes nor reads from storage.

Everything else falls under non-payale. Finally the syntax for function definitions may optionally also possess a declaration of the return type  and/or modifiers, which are like function wrappers. The return type is specified by the return keyword followed by the types of the return values. In this particular function there are no return values, so this declaration is omitted.

The totalSupply function on the other hand has a return declaration, namely return(uint), which declares that the function expects a return of type uint (i.e. uint256). Inside the function body one also uses the return keyword to tell the compiler that the following value is to be returned. The function is also of visibility type view, which means that it does not write into storage.

The body of the withdraw function has another interesting aspect of the solidity language. The keyword require starts an assertion statement. Its first argument is a boolean expression that holds the condition of the assertion. If the assertion is true the rest of the function body is executed, else the function execution gets reverted. There is an optional second argument of the require statement that can carry a string with the revert message. In this function a certain amount, called wad, gets subtracted from the balance of the caller.

Finally we can see a transfer function that is also guarded by a similar requirement as the withdraw function.^[[o]](#cmnt15)^

Vyper

"Vyper is a contract-oriented, pythonic programming language that targets the Ethereum Virtual Machine (EVM)". Vyper's principles are explained in its documentation and among them are: security, Language and compiler simplicity and Auditability.

This is a programming language similar to Python, also developed for the Ethereum Blockchain. It is considered more secure than Solidity as it has a smaller feature set and thus fewer opportunities for bugs.

Vyper's goal is to provide developers with an easy-to-read language. According to Vyper's principles, it is more important that the reader has a smoother experience than the code writer, so they prioritize making the code easier to read.

Vyper was built to solve the security issues Solidity has, and because of it, it has less features than Solidity, it's good to highlight that Vyper is focused on complementing Solidity, not in replacing it. At the same time, Vyper offers contract-specific features such as custom global variables.

## Code example in Vyper

We will now look at an implementation of the simplified wrapped ether contract from a vyper point of view:

![](images/image3.png)

First we notice that the code is roughly of the same length. Nevertheless vyper has a few design choices that tend to make contracts a little shorter. For instance, any public state variable automatically has an associated getter function. This way we do not need to code explicitly any totalSupply view function, because it's built in.

Regarding the length in terms of compiled bytecode, vyper definitely has an advantage. It flexes its muscles with a bare 435 bytes compared to 1849 bytes on the default compiler settings for the solidity compilation.

Regarding the syntax, vyper has an overall more pythonic feel to it. Visibility as well as mutability and in fact also modifiers are actually indicated via the @ symbol, which in python is used to indicate function wrappers. Just like in python, indentation is used to demark the function body. To call a function from the same contract one needs to use the self.function notation.

## Getting into the comparison part:

Solidity and Vyper are two of the most popular programming languages used for writing Smart Contracts on the Ethereum Blockchain. Both languages have their own strengths and weaknesses and choosing between them depends on the specific needs and trade-offs of each project. In this article, we will compare Solidity and Vyper to help you make an informed decision on which language to use for your next Ethereum project.

Let's take a look at the characteristics they share but that makes them different from the other.

### Syntax:

Solidity is influenced by C++, Python and JavaScript, making it a familiar and accessible language for many developers. On the other hand, Vyper is a subset of Python, making it simple and easy to read for those familiar with the language. However, the simplicity of the Vyper syntax is also translated in less features compared to Solidity.

### Features:

Solidity is a full-fledged programming language with a rich set of features, including inheritance, libraries, and user-defined types. This versatility makes it a popular choice for complex Smart Contract development. Vyper, on the other hand, has limited features for security purposes. The language aims to reduce the attack surface of Smart Contracts and make the code easier to audit. As a result, Vyper is considered a more secure language compared to Solidity.

### Performance:

Vyper is designed for security and simplicity, making it faster and more efficient than Solidity. Vyper contracts use less gas, which is the computational effort required to execute a Smart Contract on the Ethereum Blockchain. This makes Vyper more suitable for simple, secure contracts. Solidity, on the other hand, is more versatile but slower and uses more gas. The increased gas consumption can make Solidity contracts more expensive to execute, especially for complex contracts.

### Auditability:

Vyper is considered easier to audit than Solidity. This is because the language has fewer features, making it easier to understand and verify the code, basically as its documentation says its focus is in being easy "human-readable" . Vyper's simplicity also reduces the attack surface of Smart Contracts, making it a safer choice for critical contracts. However, Vyper has less community support and tooling compared to Solidity, making it more challenging to find resources and support for the language.

Both Solidity and Vyper have their own advantages and disadvantages.

In conclusion, choose your language according to your priorities while coding:

Secure, simple contracts = Vyper.

Versatile, complex contracts = Solidity.

If you want to know more about Smart Contract development, subscribe to our Newsletter(link) and check out our website(link)  to learn more about dOrg and or services.

Resources:

[https://blog.logrocket.com/smart-contract-programming-languages/](https://www.google.com/url?q=https://blog.logrocket.com/smart-contract-programming-languages/&sa=D&source=editors&ust=1682364056767327&usg=AOvVaw1A5WNfKJtNM5Kn9SZDbovd)

[https://docs.solana.com/developing/on-chain-programs/developing-rust](https://www.google.com/url?q=https://docs.solana.com/developing/on-chain-programs/developing-rust&sa=D&source=editors&ust=1682364056767641&usg=AOvVaw0LnB0an6du4tpenP1Ltmt4)

[https://docs.vyperlang.org/en/v0.1.0-beta.12/index.html](https://www.google.com/url?q=https://docs.vyperlang.org/en/v0.1.0-beta.12/index.html&sa=D&source=editors&ust=1682364056767895&usg=AOvVaw269E9FZZrX0AXTYGneSY_4)

[https://doc.rust-lang.org/book/foreword.html](https://www.google.com/url?q=https://doc.rust-lang.org/book/foreword.html&sa=D&source=editors&ust=1682364056768091&usg=AOvVaw19dx-PHjSfvI06TJ4qetnV)

[https://ethereum.org/en/developers/docs/smart-contracts/languages/](https://www.google.com/url?q=https://ethereum.org/en/developers/docs/smart-contracts/languages/&sa=D&source=editors&ust=1682364056768302&usg=AOvVaw36JYZ5H31Rb6kE9_5i72Jc)

[https://101blockchains.com/vyper-smart-contracts/](https://www.google.com/url?q=https://101blockchains.com/vyper-smart-contracts/&sa=D&source=editors&ust=1682364056768549&usg=AOvVaw0jjGTcqSyyXTTOReQlHEBS)

[https://chat.openai.com/chat](https://www.google.com/url?q=https://chat.openai.com/chat&sa=D&source=editors&ust=1682364056768785&usg=AOvVaw1SSI3dzJvHos5Qw17Cw33y)
