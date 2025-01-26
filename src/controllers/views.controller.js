import productsManager from "../data/fs/products.fs.js";

const indexView = async (req, res, next) => {
  try {
    const all = await productsManager.readAll();
    const data = {
      title: "Home",
      products: all,
    };
    return res.status(200).render("index", data);
  } catch (error) {
    next(error);
  }
};

const productView = async (req, res, next) => {
  try {
    const { pid } = req.params;
    const one = await productsManager.readOne(pid);
    const data = {
      title: "Product Detail",
      product: one,
    };
    return res.status(200).render("product", data);
  } catch (error) {
    next(error);
  }
};
const cartView = (req, res, next) => {
  try {
    const data = {
      title: "Cart",
    };
    return res.status(200).render("cart", data);
  } catch (error) {
    next(error);
  }
};

const profileView = (req, res, next) => {
  try {
    const data = {
      title: "Profile",
    };
    return res.status(200).render("profile", data);
  } catch (error) {
    next(error);
  }
};

const registerView = (req, res, next) => {
  try {
    const data = {
      title: "Register",
    };
    return res.status(200).render("register", data);
  } catch (error) {
    next(error);
  }
}

export { indexView, productView, cartView, profileView, registerView };
