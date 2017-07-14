class HelloWorld {
  /**
   * Returns a greeting.
   * @param name string
   */
  static hello(name = "World") {
    return `Hello, ${name}!`;
  }
}

export default HelloWorld