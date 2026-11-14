# Workflow Agent 接口审核

本轮修复：

- 删除 `workflow_models`，Agent 的阶段输入 schema 不接受 `modelSelection`。创建时通过真实执行上下文 `exec.agent.model.current()` 继承聊天配置，不取全局默认；模型不是 Agent 参数。
- 模型继承在 Host/Store 事务内完成，位于幂等请求指纹之外。相同 requestId 重放不会因聊天模型改变而产生新流程或改写旧配置。
- `workflow_update` 是带 expectedRevision 的完整定义替换。Host 按稳定 stageId 保留用户模型选择；只有新增 AI 阶段继承编辑聊天配置。用户详情页的模型修改仍由原 UI 命令保存。
- definition / stages 均有字段级 JSON Schema，禁止未知字段，明确 agent/review、AI prompt、审核 returnStageId 与稳定 ID。完整跨阶段语义继续由 Store 统一校验。
- 工作区和 Agent 身份由执行上下文取得，不接受调用者指定路径或身份；任务执行、流程定义修改、人工审核保持独立接口。Agent 没有人工审核入口。
- 自动创建 prompt 只在关键信息缺失时追问，不要求每次先确认。自动修改 prompt 先读取最新定义与 revision，只修改用户要求的范围，指定 stageId 时默认只修改该阶段。两种 prompt 均不讨论模型配置，也不自动创建或运行任务。

当前工具：`workflow_list`、`workflow_list_tasks`、`workflow_create`、`workflow_update`、`workflow_create_task`、`workflow_get_task`、`workflow_get_stage_trace`。创建/更新返回供 Agent 使用的定义投影，不暴露可编辑模型字段。显式 requestId 用于可靠重试；省略时生成新请求，重复独立调用可能创建不同资源。已有任务保留旧定义快照。

历史优化新增两个只读入口：任务摘要携带不可变 workflowVersionId 与版本号；阶段过程先核对 Task、阶段与 Attempt 的关联，再核对会话请求与回合边界。过程统计来自 DSH 日志，不把工具调用总时间冒充纯执行时间，不混入会话后续聊天，缺失数据不造零。

`workflow_get_task` 默认返回进度和有效报告索引，不反复读取所有报告全文；只有显式 `includeOutputText: true` 才读取并校验正文。Agent 仍须先通过当前工作区核对 Task 归属。浏览器读取阶段正文复用 `getArtifact`，人工批准时仍在服务端核验不可变附件，元数据中的可审核状态不替代这一步校验。

中断恢复和终止的浏览器接口支持 `confirmedStopped`，只用于用户核对旧操作后确认，不添加到 Agent 工具。冷启动未知执行缺少该确认时拒绝释放；原生会话或作业仍忙时确认也不能跳过检查。阶段 prompt 的实时审核状态由界面表达，Agent 生成的静态产物不写随决定过期的“待审”标签。
