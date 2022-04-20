//没用ts，所有暂时没用
export type Difficulty ='简单'|'普通'|'困难'

// name,stuff,maybeStuff?,tools,diff?,methods?,photo?,link?,type?,
export interface RecipeItem{
    // 菜名
    name:string,
    // 食材
    stuff:string[],
    // 工具
    tools:string,
    //难度
    diff?:Difficulty |'',
    // 方法
    methods?:string,
    // 图片
    photo?:object,
    // 参考链接
    link?:string,
}

export type Recipe = RecipeItem[]