var querySelect = 'SELECT ';
var fromTable = 'FROM ';
var innerJoin = 'INNER JOIN ';
var where = 'WHERE ';
var limit = 'LIMIT ';
var order = 'ORDER BY ';

querySelect += '`m`.`id` as id, ';
querySelect += '`m`.`name` as title, ';
querySelect += '`m`.`description` as body, ';
querySelect += '`m`.`data` as date, ';
querySelect += '`m`.`files` as files, ';
querySelect += '`u`.`name` as author, ';
querySelect += '`u`.`id` as author_id ';

fromTable += '`calc_message` `m` ';

innerJoin += '`user` `u` ';
innerJoin += 'ON `u`.`id`=`m`.`user` ';

where += '`m`.`calc_messwhomtype`=:type AND ';
where += '`m`.`visible`=:one AND ';
where += '`m`.`send`=:one ';

order += '`m`.`id` DESC ';

limit += '10';

const GET_LAST_POSTS = querySelect + fromTable + innerJoin + where + order + limit;

module.exports = GET_LAST_POSTS;