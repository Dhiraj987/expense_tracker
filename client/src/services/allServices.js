import http from "../http-common";

class TrackerDataService {
  getBal() {
    return http.get("/");
  }
  getInc() {
    return http.get("/inc");
  }
  getExp() {
    return http.get("/exp");
  }
  insertInc() {
    return http.post("/inc");
  }
  insertExp() {
    return http.post("/exp");
  }
  updateExp(id, data) {
    return http.put(`/exp/${id}`, data);
  }
  updateInc(id, data) {
    return http.put(`/inc/${id}`, data);
  }
  deleteExp(id) {
    return http.delete(`/exp/${id}`);
  }
  deleteInc(id) {
    return http.delete(`/inc/${id}`);
  }
}

export default new TrackerDataService();
