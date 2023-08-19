import {
  create as _create,
  getAll as _getAll,
  deleteById as _deleteById,
  update as _update,
} from "../models/userModel";

export function create(req, res) {
  //logic/data validation code write here
  return _create(req.body)
    .then((data) => {
      return res.send({
        status: "ok",
        msg: "User created successfully.",
        data: data,
      });
    })
    .catch((err) => {
      return res.send({ status: "fail", error: err });
    });
}
export function getAll(req, res) {
  return _getAll()
    .then((allUsers) => res.send(allUsers))
    .catch((err) => res.send({ status: "fail", error: err, code: 500 }));
}
export function deleteById(req, res) {
  return _deleteById(req.body.id)
    .then((deletedUser) =>
      res.send({
        status: "OK",
        msg: "User deleted successfully.",
        deletedUser: deletedUser,
      })
    )
    .catch((err) => res.send({ status: "fail", errro: err }));
}
export function update(req, res) {
  return _update(req.body.id, req.body.fields)
    .then((updatedUser) =>
      res.send({
        status: "OK",
        msg: "User updated successfully.",
        updatedUser: updatedUser,
      })
    )
    .catch((err) => res.send({ status: "fail", errro: err }));
}
