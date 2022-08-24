### Mongoose 와 MongoDB의 차이

-   mongooseDB 를 사용했을때 5000건의 데이터 삽입: 532.508ms
-   mongoDB를 사용했을때 5000건의 데이터 삽입: 191.682ms
-   하지만 mongoose 에는 schema 가 있어 들어오는 데이터를 스키마로 비교해가며 에러를 발생시켜 올바르지 않은 타입의 유입을 방지
-   참고 mongoDB에 시간을 넣을떄 UTC 형태로 집어넣는 것이 좋음.(다른 DB의 경우 UTC기준으로 되어있는 것이 많기 때문에 확장성이 좋음)

-   lean() 이라는 메서드 체인은 무려 성능 차이를 4배나 일으키는 lean()은 순수 자바스크립트 객체이자 JSON Object를 반환하는데 사용
-   lean()을 쓰지않는다면 getters/setters 등이 담긴 값을 반환하기 때문에 find로 docs를 받을때 JSON.parse를 해줘야 JSON Object가 됨
    하지만 lean을 메서드 체인으로 건다면 JSON Object로 그 과정없이 바로 받음
-   mongoose의 모델을 이용해 find나 그 외 메서드를 사용하는 로직이 있다면 lean()을 사용하지 않아야함

##### 연산자

---

-   $eq 지정된 값과 같은 값을 찾음
-   $gt 지정된 값보다 더 큰것을 찾음
-   $gte 지정된 값보다 더 크거나 같은것을 찾음
-   $in 배열에 지정된 값이 있는것을 찾음
-   $lt 지정된 값보다 더 작은것을 찾음
-   $lte 지정된 값보다 더 작거나 같은것을 찾음
-   $ne 지정된 값과 같지 않은 모든것을 찾음
-   $nin 배열에 지정된 값이 없는것을 찾음

##### Update Option

---

-   upset은 앞의 쿼리를 통해 찾는 값이 없다면 값을 삽입 합니다
-   multi,update를 할 때 한 가지만이 아니라 그 전부를 업데이트합니다. 앞의 설정을 하지 않으면 그 key에 맞는 값 한 가지만이 갱신됩니다.
-   new는 쿼리 수행 후 갱신된 값을 반환합니다. 새로운 값으로 저장한 뒤 확인할 떄 쓰입니다.
-   setDefaultsOnInsert는 쿼리를 보낼 때 default 값을 삽입하게 해줍니다.

##### mongoDB Shall

---

-   데이터 베이스 삭제 - show dbs/ uselogsystem /db.dropDatabase()
-   데이터 베이스 사용 - use logsystem
-   컬렉션 삭제 - use logsystem / db.log.drop()
-   컬렉션 확인 - db.log.find().pretty()

##### MongoDB Index

---

-   MongoDB 인덱스도 B-tree 자료구조를 사용
-   인덱스를 컴퓨터 메모리에 올려서 구현하기 때문에 많은 인덱스를 설정하면 메모리 점유율이 높아지고 이로인해 메모리 스왑현상이 많이 일어나서
    서버 처리 성능에 과부화를 줄수 있음. 그러므로 db.collection.totalIndexSize()를 통해 인덱스 사이즈 확인하며 처리하는것이 좋음
