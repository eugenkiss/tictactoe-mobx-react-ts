Alternative implementation of
[React's TicTacToe tutorial, in Kotlin/JavaFX](https://blog.plan99.net/reacts-tictactoe-tutorial-in-kotlin-javafx-715c75a947d2)
by [Mike Hearn](https://github.com/mikehearn)
in React, MobX and TypeScript
to show that a similar productivity, as stated in the article,
can be achieved with web technologies.

**[Live editable version](https://codesandbox.io/s/github/eugenkiss/tictactoe-mobx-react-ts)**

See also [my comment](https://medium.com/@eugenkiss/good-article-91b6afd8f1a2)
on Mike Hearn's article:

> While I’m a big Kotlin fan myself I have to concede the following. With
TypeScript you essentially get the same tooling / IDE support as with Kotlin.
Even more so, if you use WebStorm. With a library like MobX you get an even
better reactive state management solution than JavaFX’s native one, EasyBind or
TornadoFx. With the combination of React, TypeScript and MobX, as well as some
layout helper components you can define yourself with flexbox, you have a
similar if not better developer experience than with Kotlin/JavaFX. Plus, as you
mention, distributing your app is much easier using web technologies.
>
> You might take a look at my implementation of
> [7GUIs in React/TypeScript/MobX](https://github.com/eugenkiss/7guis-React-TypeScript-MobX)
> to see it in practice. Maybe I’ll write a TicTacToe version in it, too, for
better comparison. — (I did write it and the result is this repository here ;))
>
> In an ideal world, I’d rather use Kotlin instead of TypeScript (even though
TypeScript has some advanced features that I miss in Kotlin such as
> [Mapped Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#mapped-types))
> and Kotlin Builders instead of JSX but still target JavaScript as the
output. Afaik, the Kotlin integration with React and JavaScript is still not
good enough to make switching worth it.

Note that I didn't add any styling.