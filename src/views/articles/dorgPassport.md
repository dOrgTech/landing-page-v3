## What is it?

A Passport NFT (ERC-721) serves as a digital identity and membership credential for the DAO. It functions as a member's key to dOrg and provides proof of membership. Moreover, possessing a dOrg Passport grants certain privileges and benefits to the member within the DAO, establishing their status.

The dOrg Passport introduces a change in how we address members. Instead of using their wallet address, we now refer to them by their unique passport ID. Drawing an analogy to a physical passport, the dOrg Passport empowers its holder with voting power and the ability to participate in decision-making and other governance-related rights, akin to a "citizen identity."

Essentially, dOrg's passport digitally authenticates a member's identity and represents their involvement within the dOrg community.

dOrg's passport as an improvement to our DAO structure, benefits/improvement it will bring to dOrg.

- Members can easily switch wallets using the avatar.
- Referring to members by passport ID enhances clarity and organization.
- The passport acts as an index for accessing member-related information within the DAO and associated systems.
- Displaying the dOrg passport across various platforms and social media enhances a member's reputation within the ecosystem.
- Implementation of the dOrg passport sets new standards in governance and structure, offering potential for process automation and expansion.

### Technical Development Details:

A Passport NFT (ERC-721) symbolizes DAO membership and can be created or transferred solely by the DAO at this point.

Additionally, the DAO can issue a non-transferable token called Rep (ERC-20), designed for voting and other functionalities.

Furthermore, the DAO has the ability to issue various non-transferable tokens, including fungible, non-fungible, or semi-fungible tokens (ERC-1155), all of which will be associated with the Passport. For instance, dOrg intends to utilize this feature to issue project management badges and technical lead badges.

Here are some interesting insights into the development of the dOrg passport:

### Deployment Examples

**Passport:**

forge create `src/Passport/Passport.sol:Passport --constructor-args 0xOwner "dOrg Passport v1" "dPass" "https://www.dorg.tech/passport/" --private-key "xxx" --rpc-url "https://rpc.ankr.com/eth_goerli" --verify --etherscan-api-key "xxx"`

**Rep:**

forge create `src/Rep/Rep.sol:Rep --constructor-args 0xOwner 0xPassport "dOrg Rep v1" "dRep" --private-key "xxx" --rpc-url "https://rpc.ankr.com/eth_goerli" --verify --etherscan-api-key "xxx"`

**Badges**:

forge create `src/Badges/Badges.sol:Badges --constructor-args 0xOwner 0xPassport "https://www.dorg.tech/badges/" --private-key "xxx" --rpc-url "https://rpc.ankr.com/eth_goerli" --verify --etherscan-api-key "xxx"`

- The passport contract defines two roles: the minter role and the transfer role. These roles can be assigned to other contracts, allowing them to mint and transfer passports. Initially, dOrg has granted both roles exclusively to the dOrg safe.
- If dOrg wishes to modify or expand its minting and transferring mechanisms in the future, it can delegate these roles to other contracts. Additionally, multiple contracts can possess these roles simultaneously if desired.
- Passports are only transferable by the transfer role. In our example, both roles (minter and transfer) are held by the safe.
- Once deployed, the safe can mint passports for specific addresses. After minting, the normal transferability functionality is disabled, and the safe can mint and transfer passports to new addresses, accommodating cases where a member moves their passport to a new address.
- The "Rep" token also possesses two roles: the snapshot role and the minter burner role. It can be utilized for voting, such as in a snapshot or an on-chain governance system like OpenZeppelin governor.

The Rep token itself is not transferable, except when the passport is moved, in which case the Rep token will follow the passport to the new address. This ensures that it will be visible in the new passport holder's wallet.

- Presently, two types of badges exist: the Tech Lead badge and the Project Manager badge. After creation, these badges can be minted and added to the respective passports, making them visible in the wallet of the passport's owner.
- If the passport owner changes, all badges and the Rep token will "follow" the new passport owner. To make the badges and Rep visible in the new passport owner's wallet, the transfer of these tokens can be manually triggered by anyone, or it will occur automatically the next time any of the tokens are burned or new tokens are minted.
- The passport can also be employed for voting, particularly in scenarios where a "one member, one vote" principle is desired.

If you want to learn more about its technical details, please explore our github:

[https://github.com/dOrgTech/passport](https://github.com/dOrgTech/passport)

Precedent that the passport will bring to the ecosystem and DAO tooling (“creating the standards”)

The dOrg passport is a game-changing functionality for the ecosystem and DAO Tooling for several reasons:

- First and foremost, it establishes a standard for verifying and managing identities within dOrg, ensuring seamless interaction and collaboration between dOrg and its members. This standard can potentially be applied to other DAOs in the ecosystem, providing a robust and secure way to prove the identity of members and prevent impersonation.
- Additionally, the passport can serve as a tool to facilitate interoperability between different DAOs, promoting integration and collaboration across decentralized organizations. This innovation has the potential to become a mainstream standard within the DAO space.
- Furthermore, the dOrg passport introduces a new governance framework in dOrg that emphasizes transparency, inclusivity, and accountability while preserving privacy and security. This enhances each member's reputation and fosters a democratic community participation in decision-making processes.
- Both badges are enabled to vote, allowing the DAO to utilize protocols like Compound's Governor Alpha, Bravo, or the new Zodiac Governor module for voting on proposals.
- Moreover, the dOrg passport will support the delegation of voting power, enabling members to transfer their voting power to individuals with a strong reputation. This delegation process could also be standardized to ensure accurate and informed decision-making.
- The dOrg passport enables DAOs to have multiple proposal streams, such as one Passport, one vote, or Rep-based voting, providing flexibility in their governance approach.
- Lastly, the ability to authorize other contracts to mint Rep tokens opens up new possibilities for automating Rep distribution and granting different rules to various Governor Modules within a DAO. This feature allows for granular control and delegation of powers to specific modules, promoting transparency and adaptability.
- With this functionality, DAOs can achieve greater automation and efficiency in their decision-making processes while maintaining a secure and transparent governance system.

**Github:**[https://github.com/dOrgTech/DIPs/blob/main/DIPs/DIP-2.md](https://github.com/dOrgTech/DIPs/blob/main/DIPs/DIP-2.md)
