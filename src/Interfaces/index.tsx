
interface TargetInterface extends EventTarget {
  id: number,
}

export interface EventInputChange extends React.ChangeEvent<HTMLInputElement>{
}

export interface EventInputKeyDown extends React.KeyboardEvent<HTMLInputElement>{
}

export interface EventImg extends React.MouseEvent<HTMLImageElement>{
  target: TargetInterface
}
