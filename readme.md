How does TypeScript enforce type safety in this object-oriented program?

TypeScript ensures only values of the correct type are assigned.

How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?

Data Integrity: Prevents invalid values, Changes to properties always go through methods you define. You can change internal implementation without affecting the code that uses the class. Sensitive properties (like SKU or internal calculations) are not exposed publicly.

Methods like applyDiscount() are public, letting the program safely apply a discount without exposing internal state.


What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?

External code cannot directly change weight to an invalid value. Any access goes through formattedWeight, which guarantees consistency and prevents bugs.

If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?

You don’t have to change orexisting code that works with Product. alter the code. Loops like console.log. automatically handle itPolymorphism allows SubscriptionProduct, DigitalProduct, and PhysicalProduct to be treated as Product, but each behaves according to its own implementation of getPriceWithTax().