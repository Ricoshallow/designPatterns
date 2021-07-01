# 前端设计模式
## 什么是设计模式
设计模式是对软件设计开发过程中**反复**出现的某类问题的**通用**解决方案。学习设计模式更多的是理解各种模式的内在思想和解决的问题。
## 设计模式的类型
1. 结构型模式（Structural Patterns）： 通过识别系统中组件间的简单关系来简化系统的设计。
2. 创建型模式（Creational Patterns）： 处理对象的创建，根据实际情况使用合适的方式创建对象。常规的对象创建方式可能会导致设计上的问题，或增加设计的复杂度。创建型模式通过以某种方式控制对象的创建来解决问题。
3. 行为型模式（Behavioral Patterns）： 用于识别对象之间常见的交互模式并加以实现，如此，增加了这些交互的灵活性。

### 1.结构型模式（Structural Patterns）
-  外观模式（Facade Pattern）

        它为子系统中的一组接口提供一个统一的高层接口，使子系统更容易使用。简而言之外观设计模式就是把多个子系统中复杂逻辑进行抽象，从而提供一个更统一、更简洁、更易用的API。
